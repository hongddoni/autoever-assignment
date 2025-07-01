interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
  const { children } = props;

  return <div className={"wrapper"}>{children}</div>;
};
