// Generated from the supplied edition by scripts/pyq/populate.py.
import { readPaper } from './paper';
import { dailyPapers } from './daily';

const entries = readPaper(2023, {});
export default [...entries, ...dailyPapers.filter(q => q.examYear === 2023)].sort((a, b) => a.number! - b.number!);
