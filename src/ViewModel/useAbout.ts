import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../Model/Redux/store";
import { setHighlightedId } from "../Model/Redux/About/About.Slice";

export const useAbout = () => {
    const dispatch = useDispatch<AppDispatch>();
    const highlightedId = useSelector((state: RootState) => state.about.highlightedId);
    
    const [btnHover, setBtnHover] = useState(false);
    const [opentIndex, setOpentIndex] = useState<number | null>(null);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const project = searchParams.get('project');
        if (project) {
            const targetId = decodeURIComponent(project).trim();
            dispatch(setHighlightedId(targetId));

            // Wait slightly for DOM to render completely
            const timer = setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 200);

            // Clear highlight after 3 seconds
            const clearTimer = setTimeout(() => {
                dispatch(setHighlightedId(null));
            }, 3000);

            return () => {
                clearTimeout(timer);
                clearTimeout(clearTimer);
            };
        }
    }, [searchParams, dispatch]);

    return {
        highlightedId,
        btnHover,
        setBtnHover,
        opentIndex,
        setOpentIndex,
    };
};
