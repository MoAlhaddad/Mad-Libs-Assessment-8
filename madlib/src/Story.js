import React from 'react';
import './styles.css';
import './styles-custom.css';

/* Renders a Mad lib story */

function Story({ formValues }) {
  return (
    <div className="madlib">
      <p>Sit or lay down in a comfortable way.</p>

      <p>
        Close your eyes or gently look down. Take {formValues.breathsOne} deep
        belly breathes in and out. Imagine you are traveling to{' '}
        {formValues.nounOne}. You take a look around and see colorful{' '}
        {formValues.nounTwo} and sparkling {formValues.nounThree}.
      </p>
      <p>
        You notice how {formValues.moodOne} you are feeling. You take a deep
        breath in through your nose and smell {formValues.nounFour}.
      </p>

      <p>
        Suddenly you look to your left and see {formValues.nounFive}. Mmmm. You
        take a bite and the food tastes delicious.
      </p>
      <p>
        Then you look to your right and see {formValues.nounSix}. It's very
        friendly and comes right up to you. You pick it up and give it a gentle
        snuggle.
      </p>
      <p>
        You notice how {formValues.moodTwo} you feel. Your body feels calm from
        your head to your toes.
      </p>
      <p>
        You take one more look around this amazing place and take{' '}
        {formValues.breathsTwo} deep, belly breaths in and out.
      </p>

      <p>Now slowly open your eyes and notice how your body feels.</p>
    </div>
  );
}
export default Story;