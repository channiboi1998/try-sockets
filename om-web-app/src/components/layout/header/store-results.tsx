/**
 * constants and types here are currently inline. Since we don't know yet what is the expected return from the backend or the structure of data. This file will be refactored in the future.
 */

const StoreResults = () => {
  const results = [
    { id: 2, label: "GW 3044 - Greenwich Phil. Heart Center", value: "gw_2" },
    { id: 3, label: "GW 3044 - Tarlac Magic Star Mall", value: "gw_3" },
    { id: 4, label: "GW 3044 - Pampanga Savers Mall", value: "gw_4" },
    { id: 5, label: "GW 3044 - Cavite State University", value: "gw_5" },
    { id: 6, label: "GW 3044 - Rufino Pacific Tower", value: "gw_6" },
    { id: 7, label: "GW 3044 - San Fernando, 2500 La Union", value: "gw_7" },
    { id: 8, label: "GW 3044 - Greenwich Phil. Heart Center", value: "gw_8" },
    { id: 9, label: "GW 3044 - Tarlac Magic Star Mall", value: "gw_9" },
    { id: 10, label: "GW 3044 - Pampanga Savers Mall", value: "gw_10" },
    { id: 11, label: "GW 3044 - Cavite State University", value: "gw_11" },
  ];

  return (
    <ul
      className="scroll max-h-60 overflow-y-scroll"
      style={{ boxShadow: "0px 4px 23px rgba(0, 0, 0, 0.1)" }}
    >
      {results.map(
        (item: { id: number; label: string; value: string }, id: number) => (
          <li
            key={id}
            className="text-sm px-4 py-2 border-b cursor-pointer hover:text-success hover:bg-ice first:pt-2"
          >
            {item.label}
          </li>
        )
      )}
    </ul>
  );
};

export default StoreResults;
