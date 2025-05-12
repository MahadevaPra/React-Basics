import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const imageStyle = {
  width: '75%',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-5" data-aos="fade-down">Welcome to Stopclock</h2>

      {/* Section 1: Image Left, Text Right */}
      <div className="row align-items-center mb-5" data-aos="fade-right">
        <div className="col-md-6">
          <img src="..\\images\\workout.jpeg" className="img-fluid rounded shadow-sm" style={imageStyle} alt="Workout" />
        </div>
        <div className="col-md-6">
          <h5 className="text-success mb-3">Stopclock for Workouts</h5>
          <p>
            A stopclock in the gym isn’t just a timer — it’s your silent coach, sharpening every rep, every rest, and every second of focus.
            Whether you’re hitting high-intensity intervals, managing precise rest periods, or pushing for that perfect plank hold, a clear and accurate stopclock keeps your workouts structured and intentional.
            It helps you avoid guesswork, boosts your consistency, and ensures you’re making every minute count toward real progress.
            With time on your side, you don’t just train harder — you train smarter. Ready to unlock your best performance? Let the clock guide you.
          </p>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="row align-items-center mb-5" data-aos="fade-left">
        <div className="col-md-6 order-md-2">
          <img src="..\\images\\study.jpeg" className="img-fluid rounded shadow-sm" style={imageStyle} alt="Study" />
        </div>
        <div className="col-md-6 order-md-1">
          <h5 className="text-success mb-3">Stopclock for Studying</h5>
          <p>
            A stopclock during study sessions isn’t just a timer — it’s your quiet mentor, helping you stay focused, disciplined, and efficient with every minute you invest.
            Whether you’re tackling Pomodoro intervals, timing practice tests, or managing dedicated deep-work blocks, a reliable stopclock keeps your sessions structured and purposeful.
            It takes the uncertainty out of your routine, improves consistency, and ensures that every second of study sharpens your understanding and retention.
            With time working for you, you don’t just study longer — you study smarter. Ready to make every moment count? Let the clock keep you on track.
          </p>
        </div>
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="row align-items-center mb-5" data-aos="fade-right">
        <div className="col-md-6">
          <img src="..\\images\\timer.webp" className="img-fluid rounded shadow-sm" style={imageStyle} alt="Timer" />
        </div>
        <div className="col-md-6">
          <h5 className="text-success mb-3">Stopclock for Precision</h5>
          <p>
            A stopclock isn’t just a basic timer — it’s a precision tool that gives you full control over how you manage your tasks, challenges, and goals.
            Whether you’re measuring exact durations, tracking split times, or keeping an eye on how long a task truly takes, a stopclock offers accuracy and clarity far beyond a simple countdown.
            It helps you stay intentional, organized, and aware of your pace, so you can fine-tune your performance and maximize efficiency.
            With precise timing at your fingertips, you don’t just keep track — you take charge. Ready to elevate how you manage your time? Let the stopclock lead the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
