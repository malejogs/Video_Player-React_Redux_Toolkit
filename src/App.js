import "./styles.css";
import VideoPlayer from "./containers/VideoPlayer";
import { useGetVideosQuery } from "./store/videosList";

export default function App() {
  const { data, error, isLoading } = useGetVideosQuery();
  console.log(data);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        data && <VideoPlayer list={data?.categories[0]?.videos} />
      )}
    </div>
  );
}
