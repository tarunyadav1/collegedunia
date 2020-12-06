import React from "react";
import { Icon } from "@mdi/react";
import { mdiStar } from "@mdi/js";

import "./CollegeCard.css";

function CollegeCard({ college }) {
  const {
    tags,
    rating,
    ranking,
    promoted,
    amenties,
    discount,
    offertext,
    fees_cycle,
    college_name,
    nearest_place,
    original_fees,
    rating_remarks,
    discounted_fees,
    famous_nearest_places,
  } = college;

  return (
    <div className="college-card">
      <div className="college-card__image">
        <img alt="college" src="images/college_02.jpg" />
        <div className="college-card__image-item">
          <div className="college-card__tag-group d-flex align-center">
            {tags.map((tag, i) => (
              <div key={i} className="college-card__tag thin-text bold-text">
                {tag}
              </div>
            ))}
          </div>
          <div className="college-card__ranking light-text bold-text">
            #{ranking}
          </div>
        </div>
      </div>
      {promoted ? <div className="college-card__ribbon">promoted</div> : null}
      {promoted ? <div className="college-card__ribbon--shadow" /> : null}
      <div className="college-card__remarks">
        <div className="college-card__remarks__text">
          <div>
            <span className="college-card__remarks__text--bold">{rating}</span>
            /5
          </div>
          <div>{rating_remarks}</div>
        </div>
      </div>
      <div className="college-card__details d-flex">
        <div className="college-card__details__general">
          <div className="college-card__name-wrapper bold-text">
            <span className="college-card__name">{college_name}</span>
            <span className="college-card__star-group">
              {[...Array(5)].map((e, i) => (
                <Icon
                  color={i < rating ? "#444444" : "#adadad"}
                  path={mdiStar}
                  size={0.52}
                  key={i}
                />
              ))}
            </span>
          </div>
          <div className="college-card__nearest thin-text bold-text">
            <span className="college-card__nearest-bold">
              {nearest_place[0]}
            </span>
            <span className="college-card__nearest-muted">
              {" | "}
              {nearest_place[1]}
            </span>
          </div>
          <div className="college-card__nearest-famous thin-text bold-text">
            <span className="college-card__nearest-match">93% Match: </span>
            <span class="college-card__nearest--bold">
              ${famous_nearest_places}
            </span>
          </div>
          <div className="college-card__offer-ribbon thin-text bold-text">
            <span class="college-card__offer--green">${offertext}</span>
          </div>
        </div>
        <div className="college-card__details__price">
          <div className="college-card__discount-wrapper d-flex align-center thin-text">
            <div className="college-card__original-fees thin-text">
              ₹{original_fees.toLocaleString()}
            </div>
            <div className="college-card__discount">
              {discount}
              <div className="college-card__discount-dot" />
            </div>
          </div>
          <div className="college-card__discount-fees bold-text">
            ₹{discounted_fees.toLocaleString()}
          </div>
          <div className="college-card__fees-cycle thin-text">{fees_cycle}</div>
          <div className="college-card__amenties light-text bold-text">
            {amenties.join("  ·  ")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeCard;
