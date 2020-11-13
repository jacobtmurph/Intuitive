export const Character = ({name, charClass, turnOrder, roll}) => (
    <div>
        <h1>{turnOrder} ({roll}), {name}: {charClass}</h1>
    </div>
)

