import DropdownList from "./DropdownList"
import FileUpload from "./FileUpload"
import TextInput from "./TextInput"
import Toggle from "./Toggle"

const InputContainer = ({ data, setParentData }) => {
    let keys = Object.keys(data)
    return (
        keys.map((key) => {
            let value = data[key]
            if (typeof value === "string" || typeof value === "number") {
                return <TextInput name={key} value={value} setParentData={setParentData} />
            } else if (Array.isArray(value)) {
                return <FileUpload name={key} setParentData={setParentData} />
            } else if (typeof value == "boolean") {
                return <Toggle name={key} value={value} setParentData={setParentData} />
            } else {
                return <DropdownList name={key} value={value} setParentData={setParentData} />
            }
        })
    )
}

export default InputContainer;