import "./App.css";
import { users } from "./Urls/Auth";
import { useApiGet } from "./utils/customHooks";
function App() {
  const { data, isLoading, isError, isSuccess } = useApiGet(["users"], users, {
    enabled: true,
    refetchOnWindowFocus: true,
    retry: 1,
  });

  if (isLoading)
    return (
      <>
        <p>Cargando</p>
      </>
    );

  {
    if (isError || isLoadingError) return <p>error?.message</p>;
  }

  const post = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {data?.map((item, index) => (
        <>
          <p>Success</p>
        </>
      ))}
      <form onSubmit={post}>
        <button type="submit">test</button>
      </form>
    </div>
  );
}

export default App;
