import { BsCheck2 } from "react-icons/bs";

export const Checkbox = ({ id, name, selected, changeHandler }) => {
  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        className="w-5 h-5 appearance-none border-2 border-lightGray checked:bg-lightblue checked:border-none peer"
        name={name}
        id={id}
        checked={selected}
        onChange={changeHandler}
      />
      <BsCheck2
        size={15}
        className="absolute top-1 left-2 text-white dark:text-bgDark hidden peer-checked:block"
      />
    </label>
  );
};
