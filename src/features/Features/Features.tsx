import { featuresList } from './featuresList';
import './Features.scss';


const Features = () => {
  return (
    <section className="features" aria-label="Características del espacio">
      {featuresList.map((feature, index) => (
        <article key={index} className="feature">
          <h2>{feature.title}</h2>
          <p>{feature.desc}</p>
        </article>
      ))}
    </section>
  );
};

export default Features;
