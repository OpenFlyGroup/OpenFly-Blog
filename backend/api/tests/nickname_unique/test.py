import string
import random
from hashlib import md5

def generate_nickname(email):
    vowels = 'aeiou'
    consonants = 'bcdfghjklmnpqrstvwxyz'
    hashed_email = md5(email.encode()).hexdigest()
    hashed_email = [(chr(int(i) + 97) if i.isdigit() else i)
                    for i in hashed_email]
    nickname = ''
    for char in hashed_email:
        if len(nickname) >= 15:
            break
        if char in consonants:
            nickname += char
            if len(nickname) < 15:
                nickname += vowels[int(ord(char)) % len(vowels)]
        elif char in vowels:
            nickname += consonants[int(ord(char)) % len(consonants)]
    while len(nickname) < 15:
        nickname += consonants[int(hashed_email[0], 16) % len(consonants)]

    nickname = nickname[0].upper() + nickname[1:5] + ' ' + nickname[5].upper() + nickname[6:15]
    return nickname

def generate_random_email():
    domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com']
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=20)) + '@' + random.choice(domains)

def run_tests():
    results = {}
    for _ in range(10):
        email = generate_random_email()
        nickname = generate_nickname(email)
        if nickname in results.values():
            print(f"Error: Duplicate nickname '{nickname}' found for email '{email}'")
        else:
            print(f"{nickname}\n")
            results[email] = nickname
    return results

test_results = run_tests()