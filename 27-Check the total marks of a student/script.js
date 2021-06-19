function exam_status(total, is_exam) {
  if (is_exam) {
    return total >= 90;
  }
  return (total >= 89 && total <= 100);
}
console.log(exam_status("90", "false"));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));
