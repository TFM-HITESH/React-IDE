import { classnames } from "../utils/general";
import QuestionBox from "./QuestionBox";



const QuestionWindow = () => {

  return (
    <>
    
        <div className={classnames(
          "focus:outline-none w-[100%] border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-gray-300 mt-2"
        )}>
            <div>
                <QuestionBox  />
            </div>
        </div>
    </>
  );
};
export default QuestionWindow;
