exports.gradesAvg = (grades = []) => {
  const sumGrades = grades.reduce((prev, current) => (prev ? prev + current : 0));
  return sumGrades / grades.length
};
