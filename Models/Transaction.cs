namespace FAInancer.Models
{
    public class Transaction
    {
        public long Id { get; set; }
        public string? Description { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string? Category { get; set; }
        public bool IsExpense { get; set; }
    }
}