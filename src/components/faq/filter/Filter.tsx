type CategoryId = "ALL" | "PRODUCT" | "COUNSELING" | "CONTRACT";

interface Item {
  categoryId: CategoryId;
  name: string;
}

interface Props {
  items: Item[];
  selectedId: CategoryId;
  onChange: (id: CategoryId) => void;
}

export const Filter = (props: Props) => {
  const { items, selectedId, onChange } = props;
  return (
    <div className={"filter"}>
      {items.map((item) => (
        <label key={item.categoryId}>
          <input
            type="radio"
            name="category"
            value={item.categoryId}
            checked={selectedId === item.categoryId}
            onChange={() => onChange(item.categoryId)}
          />
          <i>{item.name}</i>
        </label>
      ))}
    </div>
  );
};
