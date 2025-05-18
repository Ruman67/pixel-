

function handleClick() {
  alert('You clicked me');
}

function ClickComponent() {
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ClickComponent;
