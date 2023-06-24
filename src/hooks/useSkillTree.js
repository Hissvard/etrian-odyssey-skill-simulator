import {useState} from "react";
import SkillNode from "../components/SkillNode";

export default function useSkillTree(params) {
    let initialValues = {};
    Object.keys(params.elements).forEach(key => initialValues[key] = 0);

    const [values, setValues] = useState(initialValues);

    const applySkillModifier = (name, n) => {
        if (values[name] + n >= 10 || values[name] + n < 0) {
            return;
        }
        setValues({
            ...values,
            [name]: values[name] + n,
        });
    };

    const initializeSkillWithDependencies = name => {
        const needs = missingSkillNeeds(name, params.elements, values);
        let newValues = {...values};

        for (const requirementName in needs) {
            const requiredValue = needs[requirementName];

            if (values[requirementName] < requiredValue) {
                newValues = {
                    ...newValues,
                    [requirementName]: requiredValue,
                    [name]: 1,
                };
            }

            // I dunnwanna use recursion. It only goes 2 levels deep anyway (Probably...)
            const requirementNeeds = missingSkillNeeds(requirementName, params.elements, values);
            for (const requirementNeedName in requirementNeeds) {
                const needRequiredValue = requirementNeeds[requirementNeedName];

                if (values[requirementNeedName] < needRequiredValue) {
                    newValues = {
                        ...newValues,
                        [requirementNeedName]: needRequiredValue,
                    };
                }
            }
        }

        setValues(newValues);
    }

    return {
        usedSkillPoints: Object.values(values).reduce((acc, n) => acc + n, 0),
        maxSkillPoints: params.maxSkillPoints,
        component: name => {
            const areNeedsMet = Object.values(missingSkillNeeds(name, params.elements, values)).length === 0;

            return <SkillNode
                name={name}
                value={values[name] || 0}
                data={params.elements[name]}
                enabled={areNeedsMet}
                onClickDown={() => areNeedsMet && applySkillModifier(name, -1)}
                onClickUp={() => areNeedsMet ? applySkillModifier(name, 1) : initializeSkillWithDependencies(name)}
            />;
        }
    };
}

function missingSkillNeeds(name, elements, values) {
    const needs = elements[name]?.needs || {};

    let missingNeeds = {};
    for (const requirementName of Object.keys(needs)) {
        const requiredValue = elements[name].needs[requirementName];
        const currentValue = values[requirementName];
        if (currentValue < requiredValue) {
            missingNeeds = {
                ...missingNeeds,
                ...elements[name].needs
            };
        }
    }

    return missingNeeds;
}