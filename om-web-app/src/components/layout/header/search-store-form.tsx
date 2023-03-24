/**
 * constants and types here are currently inline. Since we don't know yet what is the expected return from the backend or the structure of data. This file will be refactored in the future.
 */

import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../../utilities/useDebounce";
import InputField from "../../forms/input-field";
import SelectField from "../../forms/select-field";
import { CloseIcon, SearchIcon } from "../../icon";

const SearchStoreForm = () => {
  /**
   * Store Filter Initial State
   */
  const [storeSearch, setStoreSearch] = useState("");
  const [storeFranchise, setStoreFranchise] = useState("");
  const [storeStatus, setStoreStatus] = useState("");

  const debouncedStoreSearch = useDebounce(storeSearch, 500);

  useEffect(() => {
    console.log(
      "search:",
      storeSearch,
      "franchise:",
      storeFranchise,
      "status:",
      storeStatus
    );
  }, [debouncedStoreSearch, storeFranchise, storeStatus]);

  /**
   * Store Status List
   */
  const statusList = [
    { id: 2123, label: "Active", value: "active" },
    { id: 5123, label: "Inactive", value: "inactive" },
  ];

  /**
   * Franchise/Store Lists
   */
  const storesList = [
    { id: 2123, label: "Olongapo Franchises", value: "olongapo_franchises" },
    { id: 5123, label: "Manila Franchises", value: "manila_franchises" },
    { id: 4551, label: "Palawan Franchises", value: "palawan_franchises" },
    { id: 2123, label: "Pampanga Franchises", value: "pampanga_franchises" },
    { id: 5123, label: "Subic Franchises", value: "subic_franchises" },
    { id: 4551, label: "Cotobato Franchises", value: "cotobato_franchises" },
    { id: 2123, label: "Cebu Franchises", value: "cebu_franchises" },
    { id: 5123, label: "Davao Franchises", value: "davao_franchises" },
    { id: 4551, label: "Batangas Franchises", value: "batangas_franchises" },
  ];

  return (
    <div className="p-4">
      <InputField
        value={storeSearch}
        className="text-base"
        leftAdornment={<SearchIcon />}
        rightAdornment={<CloseIcon onClick={() => setStoreSearch("")} />}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setStoreSearch(e.currentTarget.value)
        }
        placeholder="Search Store Here"
      />
      <SelectField
        className="mt-2"
        value={storeFranchise}
        items={storesList}
        onChange={(e: string) => setStoreFranchise(e)}
        placeholder="All Stores"
      />
      <SelectField
        className="mt-2"
        value={storeStatus}
        items={statusList}
        onChange={(e: string) => setStoreStatus(e)}
        placeholder="All Status"
      />
    </div>
  );
};

export default SearchStoreForm;
