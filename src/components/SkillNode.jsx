import PropTypes from "prop-types";

export default function SkillNode(params) {
    return (
        <div style={{
            ...styles.container,
            opacity: params.enabled ? 1 : .5,
            backgroundColor: params.enabled ? '#015F9C' : '#23313C',
        }}>
            <span style={styles.name}>{params.name}</span>
            <button style={styles.modifierButton} onClick={params.onClickDown}>-</button>
            <button style={styles.modifierButton} onClick={params.onClickUp}>+</button>
            <span style={styles.value}>{params.value} / 10</span>
        </div>
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