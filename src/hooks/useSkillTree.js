import {useState} from "react";

export default function useSkillTree(params) {
    let initialValues = {};
    Object.keys(params.elements).forEach(key => initialValues[key] = 0);

    const [values, setValues] = useState(initialValues);

    const increaseSkill = name => {
        if (values[name] === 10) {
            return;
        }
        setValues({
            ...values,
            [name]: values[name] + 1,
        });
    };

    const decreaseSkill = name => {
        if (values[name] === 0) {
            return;
        }
        setValues({
            ...values,
            [name]: values[name] - 1,
        });
    };

    return {
        currentSkillPoints: 0,
        maxSkillPoints: params.maxSkillPoints,
        component: name => {
            const needs = params.elements[name]?.needs || {};

            let areNeedsMet = true;
            for (const requirementName of Object.keys(needs)) {
                const requiredValue = params.elements[name].needs[requirementName];
                const currentValue = values[requirementName];
                if (currentValue < requiredValue) {
                    areNeedsMet = false;
                }
            }

            return (
                <div style={{
                    ...styles.container,
                    opacity: areNeedsMet ? 1 : .5,
                    backgroundColor: areNeedsMet ? '#015F9C' : '#23313C',
                }}>
                    <span style={styles.name}>{name}</span>
                    <button style={styles.modifierButton} onClick={() => areNeedsMet && decreaseSkill(name)}>-</button>
                    <button style={styles.modifierButton} onClick={() => areNeedsMet && increaseSkill(name)}>+</button>
                    <span style={styles.value}>{values[name] || 0} / 10</span>
                </div>
            );
        }
    };
}

const styles = {
    container: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 18,
        borderRadius: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        color: 'white',
        width: 300,
        borderWidth: 1,
    },

    name: {
        whiteSpace: 'nowrap',
        marginRight: 'auto',
    },

    value: {
        marginRight: 5,
        whiteSpace: 'nowrap',
    },

    modifierButton: {
        height: 30,
        width: 30,
        flex: '0 0 30px',
        borderRadius: '50%',
    }
};