import Image from "next/image";
import {Main, MainImageBox} from "../styles/Main";

export const MainComponent = () => {
    return <Main>
        <MainImageBox>
            {/* TODO: replace with own images */}
            <Image src="/images/PLACEHOLDER_REPLACE.jpg" alt="Post Office" fill={true}/>
        </MainImageBox>
    </Main>
}