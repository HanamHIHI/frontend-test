import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTransition, animated } from 'react-spring';

type CardItem = {
  id: number;
  title: string;
  content: string;
};

const cards: CardItem[] = [
  { id: 1, title: 'Card 1', content: 'Expanded content for Card 1' },
  { id: 2, title: 'Card 2', content: 'Expanded content for Card 2' },
  { id: 3, title: 'Card 3', content: 'Expanded content for Card 3' },
  { id: 4, title: 'Card 4', content: 'Expanded content for Card 4' },
  { id: 5, title: 'Card 5', content: 'Expanded content for Card 5' },
];

export function ExpandableCard() {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  const transitions = useTransition(expandedCardId, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 150 }, // 원하는 높이로 설정
    leave: { opacity: 0, height: 0 },
    config: {
        duration: 300, // 애니메이션의 지속 시간 설정
    },
    onRest: () => {
        if (expandedCardId === null) {
            // 애니메이션이 끝난 후에만 상태를 업데이트
            setExpandedCardId(null);
        }
    },
});



  return (
    <div className="space-y-4">
      {cards.map(card => (
        <div key={card.id}>
          <Card onClick={() => handleCardClick(card.id)} className="cursor-pointer">
            <CardContent className="p-4">
              <h2 className="font-semibold">{card.title}</h2>
              <p>Click to show more details.</p>
            </CardContent>
          </Card>

          {/* useTransition을 이용해 컴포넌트의 마운트 및 언마운트를 제어 */}
          {transitions(
            (style, item) =>
              item === card.id && (
                <animated.div
                  style={{
                    ...style,
                    overflow: 'hidden',
                  }}
                  className="p-4 border rounded-md bg-gray-100"
                >
                  <h3 className="font-medium">{card.title}</h3>
                  <p>{card.content}</p>
                </animated.div>
              )
          )}
        </div>
      ))}
    </div>
  );
};
