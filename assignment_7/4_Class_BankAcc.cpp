#include <iostream>
using namespace std;

class BankAccount {
private:
    string cust_name;
    double balance;

public:

    BankAccount(string name, double bal) {
        cust_name = name;
        balance = bal;
    }

    void deposit(double amount) {
        balance += amount;
        cout << "Deposited: " << amount << endl;
    }

    void withdraw(double amount) {
        if (amount > balance) {
            cout << "Error: Insufficient balance" << endl;
        } else {
            balance -= amount;
            cout << "Withdrawn: " << amount << endl;
        }
    }

    double get_balance() {
        return balance;
    }
};

int main() {
    BankAccount account("Ravi", 5000);

    account.deposit(2000);
    account.withdraw(3000);
    account.withdraw(5000);

    cout << "Current Balance: " << account.get_balance() << endl;

    return 0;
}
