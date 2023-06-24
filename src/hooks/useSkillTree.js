import {useState} from "react";

export default function useSkillTree(params) {
    let initialValues = {};
    Object.keys(params.elements).forEach(key => initialValues[key] = 0);

    const [values, setValues] = useState(initialValues);

    const applySkillModifier = (name, n) => {
        if (values[name] + n >= 10 || values[name] + n < -1) {
            return;
        }
        setValues({
            ...values,
            [name]: values[name] + n,
        });
    };

    return {
        usedSkillPoints: Object.values(values).reduce((acc, n) => acc + n, 0),
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
                    <button style={styles.modifierButton} onClick={() => areNeedsMet && applySkillModifier(name, -1)}>-</button>
                    <button style={styles.modifierButton} onClick={() => areNeedsMet && applySkillModifier(name, 1)}>+</button>
                    <span style={styles.value}>{values[name] || 0} / 10</span>
                </div>
            );
        }
    };
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        borderRadius: 20,
        padding: '5px 10px',
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
        appearance: 'none',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        marginRight: 5,
    }
};