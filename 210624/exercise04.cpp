#include <iostream>
#include <forward_list>
#include <vector>

int main() {
  
  std::vector<std::string> vec = {
    "Lewis Hamilton", "Lewis Hamilton", "Nico Roserberg",
    "Sebastian Vettel", "Lewis Hamilton", "Sebastian Vettel",
    "Sebastian Vettel", "Sebastian Vetel", "Fernando Alonso"
  };
  auto it = vec.begin();
  std::cout << "가장 최근 우승자" << *it << std::endl;
  it += 8;
  
  advance(it, -3);
  std::cout << "그후 3년 우승자: " << *it <<std::endl;
  
  std::forward_list<std::string> fwd(vec.begin(), vec.end());
  
  auto it1 = fwd.begin();
  
  std::cout << "가장 최근 우승자" << *it1 << std::endl;
  
  advance(it1, 5);
  std::cout << "5년 전 우승자: " << *it1 << std::endl;
  
  // C 스타일 배열의 래퍼
  // std::array
  
  // 단일 연결 리스트 - 성능이나 메모리를 크게 낭비하지 않으면서 간단하고 에러를 유발하지 않는 인터페이스를 제공
  // std::forward_list
  
  // 벡터 연산자는 특정 원소에 즉각적으로 접근 할 수 있으므로 벡터 반복자의 덧셈과 뺼셈 연산은 O(1)이다.
  // std::forward_list는 연속적인 순회를 통해서만 특정 원소에 접근 할 수 있으므로 시간 복잡도는 O(n)입니다.
  
  
}
