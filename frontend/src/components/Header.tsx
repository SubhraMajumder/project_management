import { ModeToggle } from "./mode-toggle";

export function Header(){
    return(
        <div className="">
            <div className="flex justify-between">
                <ModeToggle />
            </div>
        </div>
    )
}