export const resolvePaginationData = (paginateInfo) => {
  let paginateObject = {};

  let paginationPoints = ["prev", "last", "next", "first"];

  const paginationDataArray = paginateInfo.split(",");

  paginationDataArray.forEach((eachDataString) => {
    var point = eachDataString.match(/(\d+)/)[0];

    let pointsToCheck = paginationPoints.filter(
      (each) => paginateObject[each] === undefined
    );

    pointsToCheck.forEach((eachPoint) => {
      if (eachDataString.includes(eachPoint)) {
        paginateObject[eachPoint] = point;
      }
    });
  });

  return paginateObject;
};
