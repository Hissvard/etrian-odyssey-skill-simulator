import PropTypes from "prop-types";
import {useState} from "react";
import {usePopper} from "react-popper";
import SkillData from "./SkillData";
import {createPortal} from "react-dom";

export default function SkillNode(params) {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles: popperStyles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
        placement: 'right',
    });
    const [visibleDescription, setVisibleDescription] = useState(false);

    return (
        <>
            <div style={{
                ...styles.container,
                opacity: params.enabled ? 1 : .5,
                backgroundColor: params.enabled ? '#015F9C' : '#23313C',
            }}
                 ref={setReferenceElement}
                 onMouseEnter={() => setVisibleDescription(true)}
                 onMouseLeave={() => setVisibleDescription(false)}
            >
                <span style={styles.name}>{params.name}</span>
                <button style={styles.modifierButton} onClick={params.onClickDown}>-</button>
                <button style={styles.modifierButton} onClick={params.onClickUp}>+</button>
                <span style={styles.value}>{params.value} / 10</span>
            </div>

            {createPortal(<div ref={setPopperElement} style={{
                ...popperStyles.popper,
                display: visibleDescription ? '' : 'none',
            }} {...attributes.popper}>
                <SkillData data={params.data} />
                <div ref={setArrowElement} style={popperStyles.arrow} />
            </div>, document.body)}
        </>
    );
}

SkillNode.propTypes = {
    enabled: PropTypes.bool,
    name: PropTypes.string,
    onClickUp: PropTypes.func,
    onClickDown: PropTypes.func,
    value: PropTypes.number,
};

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