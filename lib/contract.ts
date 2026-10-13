export const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
export const CONTRACT_ABI = [
 'function nextJobId() view returns (uint256)',
 'function createJob(address worker,uint256 wage,string description,uint256 completionDeadline) returns (uint256)',
 'function fundEscrow(uint256 jobId) payable',
 'function confirmJobStart(uint256 jobId)',
 'function submitCompletionProof(uint256 jobId,string proof)',
 'function approveAndRelease(uint256 jobId)',
 'function raiseDispute(uint256 jobId)',
 'function autoReleaseAfterTimeout(uint256 jobId)',
 'function jobs(uint256) view returns (address contractor,address worker,uint256 wage,string description,uint256 completionDeadline,uint8 state,string completionProof,uint256 completionSubmittedAt)',
 'event JobCreated(uint256 indexed jobId,address indexed contractor,address indexed worker)',
 'event EscrowFunded(uint256 indexed jobId,uint256 amount)',
 'event JobStarted(uint256 indexed jobId)',
 'event CompletionSubmitted(uint256 indexed jobId)',
 'event PaymentReleased(uint256 indexed jobId,address indexed worker,uint256 amount)',
 'event DisputeRaised(uint256 indexed jobId,address indexed raisedBy)'
];
