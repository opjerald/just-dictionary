interface NoContentProps {
  error: NoDefinition
}

const NoContent = ({error}: NoContentProps) => {
  return ( 
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1>{error.title}</h1>
      <p>{error.message}</p>
    </div>
   );
}
 
export default NoContent;