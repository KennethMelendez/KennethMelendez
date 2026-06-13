export default function CertsEducation() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold text-[#f0f0f0] mb-6">Certifications</h2>
        <p className="text-[#f0f0f0] font-medium">AWS Certified</p>
        <p className="text-sm text-[#888]">Developing Serverless Solutions on AWS · 2023</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-[#f0f0f0] mb-6">Education</h2>
        <div className="space-y-4">
          <div>
            <p className="text-[#f0f0f0] font-medium">Bachelor of Technology, Computer Systems</p>
            <p className="text-sm text-[#888]">City Tech CUNY · 2016</p>
          </div>
          <div>
            <p className="text-[#f0f0f0] font-medium">Building Enterprise Software Certificate</p>
            <p className="text-sm text-[#888]">LaGuardia Community College · 2017–2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}
