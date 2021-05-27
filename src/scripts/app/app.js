import "./utils/utils";
/**
 * Creates a separator markers with a title on the console
 * Pretty console visual separator
 *
 * @param {String} title Optional, default equal to (./END)
 * @param {Number} separatorLen Optional, default equal to (20)
 * @return {Void} logs the separator to the console
 * @todo add custom sepator indicator. Current default is "-"
 * @author Mark Njoroge
 */
const consoleSeparator = (title = "./END", separatorLen = 20) => {
  console.log("\n\n");
  console.log(
    `${"-".repeat(separatorLen)}     ${title}      ${"-".repeat(separatorLen)}`
  );
  console.log("\n");
};

//
//   Your Custom Separator
////////////////////////////////////////
consoleSeparator();
