import UseStateLab from "../labs/UseStateLab";
import UseEffectLab from "../labs/UseEffectLab";
import UseRefLab from "../labs/UseRefLab";
import UseIdLab from "../labs/UseIdLab";
import UseMemoLab from "../labs/UseMemoLab";
import UseCallbackLab from "../labs/UseCallbackLab";
import UseContextLab from "../labs/UseContextLab";
import UseReducerLab from "../labs/UseReducerLab";
import UseToggleLab from "../labs/UseToggleLab";
import UseInputLab from "../labs/UseInputLab";
import UseDebounceLab from "../labs/UseDebounceLab";
import UsePreviousLab from "../labs/UsePreviousLab";

const labMap = {
  useState: <UseStateLab />,
  useEffect: <UseEffectLab />,
  useRef: <UseRefLab />,
  useId: <UseIdLab />,
  useMemo: <UseMemoLab />,
  useCallback: <UseCallbackLab />,
  useContext: <UseContextLab />,
  useReducer: <UseReducerLab />,
  useToggle: <UseToggleLab />,
  useInput: <UseInputLab />,
  useDebounce: <UseDebounceLab />,
  usePrevious: <UsePreviousLab />,
};

function MainPanel({ selectedHook }) {
  return <main className="main">{labMap[selectedHook]}</main>;
}

export default MainPanel;
