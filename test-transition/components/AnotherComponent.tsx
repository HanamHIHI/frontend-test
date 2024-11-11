import { useState, useEffect } from "react";

interface Props {
    tab: number;
    end: string;
};

export function Detail() {
    const tab = -1;
    const [end, setEnd] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setEnd('end'); //붙였다 == 보임
        }, 1000);
        return () => {
            //useEffect {}안에보다 먼저 실행하고 싶은 코드넣기
            setEnd(''); // 떼었다가
        }
    }, [tab]);

    function TabContent(props: Props) {
        // return 을 생략하면 undefined가 뜹니다.
        // 컴포넌트가 렌더링되는 동안 무언가를 반환해주어야 합니다
        if (props.tab === 0) {
            return <div className={"start" + props.end}>내용0</div>
        }
        if (props.tab === 1) {
            return <div className={"start" + props.end}>내용1</div>
        }
        if (props.tab === 2) {
            return <div className={"start" + props.end}>내용2</div>
        }
    };

    return (
        <div className={"container start " + end}>
            <TabContent tab={0} end={""} ></TabContent>
        </div>
    )
}