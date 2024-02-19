import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { rootActions } from "@/lib/RootActions";

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

