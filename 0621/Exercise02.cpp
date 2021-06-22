/**
 * 다양한 타입의 데이터 여러 개를 인자로 받아 공통 타입으로 변환하는 함수
 * 
 * 전체 원소를 빠르게 순회할 수 있어야 함.
 * 
*/

#include <array>
#include <iostream>
#include <type_traits>

template<typename ... Args>
auto build_array(Args&&... args) -> std::array<typename std::common_type
<Args...>::type, sizeof ...(args)>
{
  using commonType = typename std::common_type<Args...>::type;
  return { std::forward<commonType>((Args&&)args)...};
}

int main()
{
  auto data = build_array(1, 0u, 'a', 3.2f, false);
  
  for (auto i: data)
    std::cout << i << " ";
  std:: cout << std::endl;
}