import * as React from "react";
import { Button } from "@progress/kendo-react-buttons";

const KendoReact = () => {
    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Default Buttons</p>
                <p><Button>Browse</Button></p>
                <p><Button disabled={true}>Browse</Button></p>
            </div>
        </div>
    ) 
}

export default KendoReact;