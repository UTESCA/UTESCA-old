import Button from "../../Components/Button/Button";
import Divider from "@mui/material/Divider";
import ScreenSize from "../../Components/Screen/ScreenSize";

function Join() {
  const { width } = ScreenSize();
  const position = width > 800 ? "flex-row" : "flex-col";
  return (
    <div className="pt-6 font-raleway bg-blue-white">
      <div className="px-12 flex justify-center mb-5">
        <div className="text-6xl  text-blue-medium font-bold">Join Us</div>
      </div>
      <div className="flex justify-center w-full bg-blue-400">
        <div className={"flex gap-5 divide-x " + position}>
          <div className="p-4">
            <div className="text-4xl">Are you a recruiter?</div>
            <div className="text-2xl">
              Hire the best talent at the University of Toronto by getting a
              spot at our career fair or by partnering with us for an event.
            </div>
            <div className="w-[300px]">
              <Button name="Learn More" size={2} />
            </div>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="p-4">
            <div className="text-4xl">Are you a student?</div>
            <div className="text-2xl">
              Let's stay in touch! Sign up for our newsletter to stay updated
              with our events, resources and exclusive oppourtunities!
            </div>
            <div className="w-[300px]">
              <Button name="Sign Up" size={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
