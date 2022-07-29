
function Drag(props) {
  
  return (
        <div className="drag_drop" {...props.getRootProps()}>
          <input {...props.getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
  );
}

export default Drag;