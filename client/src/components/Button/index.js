
function Button ({ checkAuth, setSeconds, addingSpell, wizard }) {
    return (
        <button className="btn btn-primary"
        onClick={() => {
           checkAuth();
           setSeconds(0);
           addingSpell(wizard._id);

        }}
        >
            New Game

        </button>
    )
}

export default Button