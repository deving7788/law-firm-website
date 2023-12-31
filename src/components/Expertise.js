import { expertise } from "../data";

const expandExpertise = (item) => {
  const detailsList = document.querySelectorAll(".expertise-item-details");

  detailsList.forEach((node, index) => {
    if (!node.classList.contains("details-hidden") && index + 1 !== item.id) {
      node.classList.add("details-hidden");
    }
  });
  detailsList[item.id - 1].classList.toggle("details-hidden");
};

const Expertise = () => {
  return (
    <>
      <section id="expertise" className="expertise-container">
        <div className="section-title">our expertise</div>
        <div className="expertise-subcontainer">
          <ul>
            {expertise.map((item, index) => {
              return (
                <li key={item.id}>
                  <div
                    className="expertise-item-icon"
                    onClick={() => expandExpertise(item)}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <span
                      className="expertise-item-title"
                      onClick={() => expandExpertise(item)}
                    >
                      {item.title}
                    </span>
                    <p
                      className={
                        index == 0
                          ? "expertise-item-details"
                          : "expertise-item-details details-hidden"
                      }
                    >
                      {item.details}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Expertise;
