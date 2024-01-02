export default function ReactComponentToString({ ReactComponent }: any) {

  const propsToString = (props: any) => {
    return Object.entries(props)
      .map(([key, value]) => {
        // Check if the value is a string and quote it
        const valueStr = typeof value === 'string' ? `"${value}"` : `{${JSON.stringify(value)}}`;
        return `${key}=${valueStr}`;
      })
      .join(' ');
  };

  const componentName = ReactComponent.displayName || ReactComponent.name || 'Component';
  const componentPropsString = propsToString(ReactComponent.defaultProps || {});

  const componentReact = `<${componentName} ${componentPropsString} />`;

  return <code>{componentReact}</code>

}


