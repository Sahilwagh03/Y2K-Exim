import React from "react";

export default function Testimonials() {
  const row1Reviews = [
    {
      avatar: "R",
      name: "Ramesh Krishnan",
      text: "Extremely professional service from Y2k Exim. They helped us clear our import shipment and guided us through the entire customs documentation process. Their knowledge of ICEGATE and customs regulations is outstanding. Highly recommended for any business looking for a reliable customs house agent."
    },
    {
      avatar: "A",
      name: "Anita Desai",
      text: "We engaged Y2k Exim for our DGFT compliance and obtaining an EPCG license. The team was incredibly efficient, handling all the paperwork with the DGFT department seamlessly. Their guidance saved us a lot of time and potential penalties. Exceptional service!"
    },
    {
      avatar: "V",
      name: "Vikram Malhotra",
      text: "Y2k Exim has been our go-to consultant for industrial subsidies. They possess deep expertise in government incentive schemes and helped us secure our state subsidies on time. Very transparent and proactive in their communication throughout the process."
    },
    {
      avatar: "S",
      name: "Sunita Sharma",
      text: "Excellent team at Y2k Exim. They managed our GST compliance and indirect tax matters with utmost precision. Their timely advisory has helped us optimize our tax structure for our export business. Their professional approach is highly commendable."
    },
    {
      avatar: "D",
      name: "David D'Souza",
      text: "Highly satisfied with the logistics support from Y2k Exim. They handled our ocean freight shipping and custom clearance smoothly. The coordination between their offices is top-notch, and they kept us updated at every stage of the shipment. Great partner for global trade."
    },
    {
      avatar: "P",
      name: "Priya Nair",
      text: "Y2k Exim made our transition to faceless customs clearance completely hassle-free. Their digital-first approach and error-free documentation ensured our shipments were cleared within record time. A team of true experts in import-export compliance."
    }
  ];

  const row2Reviews = [
    {
      avatar: "A",
      name: "Arjun Mehta",
      text: "Very supportive staff at Y2k Exim. We approached them for obtaining our AEO-T1 certificate, and they delivered exactly as promised. The documentation was compiled perfectly, and we received the certification without any delays. Thank you for the support!"
    },
    {
      avatar: "M",
      name: "Meera Iyer",
      text: "We have been working with Y2k Exim for over a year for our export-import documentation and licensing. They are extremely prompt in their responses and very thorough with current trade policies. They have resolved complex DGFT queries for us efficiently."
    },
    {
      avatar: "R",
      name: "Rajesh Goel",
      text: "Y2k Exim provided exceptional assistance in setting up our bonded warehouse operations. From licensing to compliance, their consultants guided us step-by-step. Their expertise in customs regulations made the entire setup process seamless and error-free."
    },
    {
      avatar: "K",
      name: "Kavitha Rao",
      text: "The subsidy consulting services of Y2k Exim are outstanding. They analyzed our project eligibility and processed our subsidy application with the departments effectively. Their consistent follow-up ensured we received our claims on time. Highly recommended!"
    },
    {
      avatar: "S",
      name: "Sanjay Patel",
      text: "Professional, prompt, and knowledgeable. Y2k Exim helped us resolve a complex customs dispute related to duty drawbacks. Their advisory team represented our case effectively, saving us significant financial loss. Outstanding expertise in global trade compliance."
    },
    {
      avatar: "N",
      name: "Neha Gupta",
      text: "Great experience working with Y2k Exim for our import-export code (IEC) registration and FSSAI import license. The entire process was completed online within a week. Their team is very polite and always ready to clarify any doubts."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 overflow-hidden select-none relative">
      <div className="w-full px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-display">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-kc-orange mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by businesses across India
          </p>
        </div>

        {/* Unified Scrolling Container for both rows */}
        <div className="flex flex-col gap-4 w-full py-4 mb-14">
          {/* ROW 1: Scrolling Left */}
          <div className="w-full overflow-hidden relative py-2">
            <div className="flex gap-6 w-max animate-scroll-left hover:[animation-play-state:paused] ease-linear">
              {/* Double the list for seamless looping */}
              {[...row1Reviews, ...row1Reviews].map((review, idx) => (
                <div
                  key={idx}
                  className="w-[340px] h-[300px] bg-white rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col flex-shrink-0"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-orange-50 text-kc-orange flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {review.avatar}
                      </div>
                      <h4 className="text-[14px] font-bold text-gray-800 leading-tight line-clamp-1 max-w-[150px]">
                        {review.name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full flex-shrink-0">
                      <i className="fas fa-check-circle text-green-600 text-[11px]"></i>
                      <span className="text-[9px] font-bold text-green-700 leading-none uppercase tracking-wider">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Star Ratings */}
                  <div className="flex gap-0.5 text-yellow-500 mb-3 text-[13px]">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  {/* Review Text */}
                  <div className="text-gray-600 text-xs leading-relaxed overflow-y-auto pr-2 flex-1 review-text-scrollbar">
                    <p>{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Scrolling Right */}
          <div className="w-full overflow-hidden relative py-2">
            <div className="flex gap-6 w-max animate-scroll-right hover:[animation-play-state:paused] ease-linear">
              {/* Double the list for seamless looping */}
              {[...row2Reviews, ...row2Reviews].map((review, idx) => (
                <div
                  key={idx}
                  className="w-[340px] h-[300px] bg-white rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col flex-shrink-0"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-orange-50 text-kc-orange flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {review.avatar}
                      </div>
                      <h4 className="text-[14px] font-bold text-gray-800 leading-tight line-clamp-1 max-w-[150px]">
                        {review.name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full flex-shrink-0">
                      <i className="fas fa-check-circle text-green-600 text-[11px]"></i>
                      <span className="text-[9px] font-bold text-green-700 leading-none uppercase tracking-wider">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Star Ratings */}
                  <div className="flex gap-0.5 text-yellow-500 mb-3 text-[13px]">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  {/* Review Text */}
                  <div className="text-gray-600 text-xs leading-relaxed overflow-y-auto pr-2 flex-1 review-text-scrollbar">
                    <p>{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Satisfaction Badge */}
        <div className="max-w-[700px] mx-auto p-5 bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 bg-orange-50 p-3 rounded-lg border border-orange-100">
              <i className="fas fa-thumbs-up text-kc-orange text-xl"></i>
            </div>

            <div className="flex flex-col text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-yellow-500 text-sm mb-1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className="text-gray-800 font-bold ml-1">4.9 Rating</span>
              </div>
              <p className="text-gray-500 text-xs">
                Based on <strong className="text-gray-700">over 250+ satisfied global clients</strong>
              </p>
            </div>
          </div>

          <a
            href="/contact-us"
            className="flex items-center gap-2 px-5 py-3 bg-kc-orange text-white rounded-full font-bold text-xs shadow-md hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Get in Touch With Us</span>
            <i className="fas fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
