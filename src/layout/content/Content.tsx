interface Props {
  children: React.ReactNode;
}

export const Content = (props: Props) => {
  const { children } = props;
  return (
    <div className={"container"}>
      <div className={"content"}>{children}</div>
    </div>
  );
};
