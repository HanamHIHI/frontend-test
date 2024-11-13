import { useState, useEffect } from "react";
import "./AnotherStyle.css"

interface Props {
    tab: number;
};

export function Detail() {
    // const tab = -1;
    const [end0, setEnd0] = useState('');
    const [end1, setEnd1] = useState('');
    const [end2, setEnd2] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setEnd0('end'); //붙였다 == 보임

            setTimeout(() => {
                setEnd1('end'); //붙였다 == 보임

                setTimeout(() => {
                    setEnd2('end'); //붙였다 == 보임
                }, 2000);
            }, 2000);
        }, 2000);

        return () => {
            setEnd0('');
            setEnd1('');
            setEnd2('');
        }
    }, []);

    function TabContent(props: Props) {
        // return 을 생략하면 undefined가 뜹니다.
        // 컴포넌트가 렌더링되는 동안 무언가를 반환해주어야 합니다
        if (props.tab === 0) {
            return <div className={"start " + end0}>내용0</div>
        }
        if (props.tab === 1) {
            return <div className={"start " + end1}>내용1</div>
        }
        if (props.tab === 2) {
            return <div className={"start " + end2}>내용2</div>
        }
    };

    return (
        <>
            <TabContent tab={0} ></TabContent>
            <TabContent tab={1} ></TabContent>
            <TabContent tab={2} ></TabContent>
        </>
    )
}