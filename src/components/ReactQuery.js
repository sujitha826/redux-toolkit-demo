import { Suspense } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import Dog1 from "../helpers/Dog1";
import Dog2 from "../helpers/Dog2";

function ReactQuery() {

  // we can remove the usage of useState and useEffect using QueryClient, also can make use of Suspense feature of React
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  // 2 components do the same thing(fetching same data) , this duplication needed since we want to display the same image in 2 places
  // But if we call getDog() method twice instead, 2 different images will be shown on 2 places.
  return (
    <QueryClientProvider client={client}>
      <Suspense fallback={<div className="loading"><h3> Loading...</h3></div>}>
        <Dog1 />
        <Dog2 />
      </Suspense>
    </QueryClientProvider>
  );
}

export default ReactQuery;