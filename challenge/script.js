let hours = 50;
let wage = 10;

if (hours > 40) {
  console.log(
    `Total paycheck is $${hours *
      (wage * 1.5)} if working ${hours} hours per week at $${wage} per hour.`
  );
} else {
  console.log(
    `Total paycheck is $${hours *
      wage} if working ${hours} hours per week at $${wage} per hour.`
  );
}
