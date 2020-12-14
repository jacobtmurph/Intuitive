export const Character = ({name, charClass, turnOrder, roll}) => (
    <div className="flex flex-row text-xl">
        <p className="mx-0">{turnOrder}({roll})</p>
        <p className="mx-6">{name} ({charClass})</p>
    </div>
)

