// Generated from the supplied edition by scripts/pyq/populate.py.
import { readPaper } from './paper';
import { dailyPapers } from './daily';

const entries = readPaper(2021, {});
export default [...entries, ...dailyPapers.filter(q => q.examYear === 2021)].sort((a, b) => a.number! - b.number!);
