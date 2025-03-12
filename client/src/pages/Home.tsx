import { Link } from "wouter";
import SocialLinks from "@/components/SocialLinks";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">
              Hi There! <span className="wave">👋</span>
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              I'M <span className="text-primary">SOUMYAJIT BEHERA</span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
              Software Developer
            </h3>

            <div className="mt-8">
              <p className="text-xl mb-6">
                LET ME <span className="text-primary">INTRODUCE</span> MYSELF
              </p>
              <p className="text-gray-300 mb-4">
                I fell in love with programming and I have at least learnt something, I think... 👨‍💻
              </p>
              <p className="text-gray-300 mb-4">
                I am fluent in classics like <span className="text-primary">C++, Javascript and Go</span>
              </p>
              <p className="text-gray-300 mb-4">
                My field of interest's are building new{" "}
                <span className="text-primary">Web Technologies and Products</span> and also in areas
                related to <span className="text-primary">Blockchain</span>.
              </p>
              <p className="text-gray-300 mb-8">
                Whenever possible, I also apply my passion for developing products with{" "}
                <span className="text-primary">Node.js</span> and{" "}
                <span className="text-primary">Modern Javascript Library and Frameworks</span> like{" "}
                <span className="text-primary">React.js and Next.js</span>
              </p>
            </div>

            <div className="mt-10">
              <p className="text-xl mb-4 text-center lg:text-left">FIND ME ON</p>
              <p className="text-gray-400 mb-6 text-center lg:text-left">
                Feel free to{" "}
                <span className="text-primary cursor-pointer hover:underline">connect</span> with me
              </p>
              <SocialLinks />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative animate-float max-w-md">
              <img
                src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-1643.jpg?w=740"
                alt="Developer illustration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
