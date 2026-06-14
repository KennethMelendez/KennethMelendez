export default function CertsEducation() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
        <div className="space-y-5">
          <div>
            <p className="text-white font-medium">Developing Serverless Solutions on AWS</p>
            <p className="text-sm text-[#909090]">Amazon Web Services · 2023</p>
          </div>
          <div>
            <p className="text-white font-medium">Full Stack Web Development</p>
            <p className="text-sm text-[#909090]">The Software Guild · 2019</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
        <div className="space-y-5">
          <div>
            <p className="text-white font-medium">Bachelor of Technology</p>
            <p className="text-sm text-[#909090]">New York City College of Technology (CUNY) · 2016</p>
          </div>
          <div>
            <p className="text-white font-medium">Building Enterprise Software</p>
            <p className="text-sm text-[#909090]">LaGuardia Community College · 2017-2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}
